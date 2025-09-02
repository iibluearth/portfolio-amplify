import * as cdk from 'aws-cdk-lib';
import * as amplify from '@aws-cdk/aws-amplify-alpha';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';

export class PortfolioInfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Amplify Application 
    const amplifyApp = new amplify.App(this, 'PortfolioApplication', {
      appName: 'Portfolio',

      // Connect to my Github repo
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider ({
        owner: 'iibluearth',
        repository: 'portfolio-amplify',
        oauthToken: cdk.SecretValue.secretsManager('github-token')
      }),
      
      // Build Specification 
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: '1.0',
        frontend: {
          phases: {
            preBuild: {
              commands: [
                'echo "starting this build"',
                'npm install'
            ],
            },
            build: {
              commands: [
                'echo "building our nextjs app..."',
                'nmp run build',
                'npm run export'
              ],
            },
          },
          artifacts: {
            baseDirectory: 'out',
            files: ['**/*'],
          },
          cache: {
            paths: [
              'node/modules/**/*',
              '.next/cache/**/*'
            ]
          }
        }
      })

    })
    const mainBranch = amplifyApp.addBranch('main', {
      autoBuild: true
    })
  }
}
