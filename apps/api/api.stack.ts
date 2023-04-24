import * as cdk from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

const app = new cdk.App();

export class ApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new NodejsFunction(this, 'ApiLambda-Proxy', {
      entry: './src/main.ts',
      handler: 'handler',
      memorySize: 128,
      runtime: Runtime.NODEJS_18_X,
      bundling: {
        externalModules: ['@nestjs/core', '@nestjs/platform-express'],
      },
    });
  }
}

new ApiStack(app, 'ApiStack', {
  env: {
    account: process.env.AWS_ACCOUNT_NUMBER,
    region: process.env.AWS_REGION,
  },
});
