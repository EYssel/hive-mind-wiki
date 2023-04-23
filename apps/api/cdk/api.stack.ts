import * as cdk from 'aws-cdk-lib';
import { Architecture, Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

export class ApiStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new NodejsFunction(this, 'api', {
      entry: 'apps/api/src/main.ts',
      handler: 'handler',
      memorySize: 128,
      architecture: Architecture.ARM_64,
      runtime: Runtime.NODEJS_18_X,
    });
  }
}

const app = new cdk.App();
new ApiStack(app, 'InfrastructureStack', {
  // env: { account: '123456789012', region: 'us-east-1' },
});
