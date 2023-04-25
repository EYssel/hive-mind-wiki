import * as cdk from 'aws-cdk-lib';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

const app = new cdk.App();

export class ApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const apiLambdaProxy = new NodejsFunction(this, 'ApiLambda-Proxy', {
      entry: './src/main.ts',
      handler: 'handler',
      memorySize: 128,
      runtime: Runtime.NODEJS_18_X,
      bundling: {
        preCompilation: true,
        nodeModules: [
          '@nestjs/core',
          '@nestjs/common',
          '@nestjs/platform-express',
          'cache-manager',
          'class-validator',
          'class-transformer',
          'reflect-metadata',
          'rxjs',
        ],
        tsconfig: 'tsconfig.json',
      },
    });

    const api = new RestApi(this, 'hive-mind-api', {
      restApiName: 'Hive Mind API',
      description:
        'This service is the API for the Hive Mind Wiki application.',
    });

    api.root.addProxy({
      defaultIntegration: new LambdaIntegration(apiLambdaProxy),
    });
  }
}

new ApiStack(app, 'ApiStack', {
  env: {
    account: process.env.AWS_ACCOUNT_NUMBER,
    region: process.env.AWS_REGION,
  },
});
