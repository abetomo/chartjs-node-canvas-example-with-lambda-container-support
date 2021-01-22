# chartjs-node-canvas-example-with-lambda-container-support

## sam init

```
% sam init
Which template source would you like to use?
	1 - AWS Quick Start Templates
	2 - Custom Template Location
Choice: 1
What package type would you like to use?
	1 - Zip (artifact is a zip uploaded to S3)
	2 - Image (artifact is an image uploaded to an ECR image repository)
Package type: 2

Which base image would you like to use?
	1 - amazon/nodejs12.x-base
	2 - amazon/nodejs10.x-base
	3 - amazon/python3.8-base
	4 - amazon/python3.7-base
	5 - amazon/python3.6-base
	6 - amazon/python2.7-base
	7 - amazon/ruby2.7-base
	8 - amazon/ruby2.5-base
	9 - amazon/go1.x-base
	10 - amazon/java11-base
	11 - amazon/java8.al2-base
	12 - amazon/java8-base
	13 - amazon/dotnetcore3.1-base
	14 - amazon/dotnetcore2.1-base
Base image: 1

Project name [sam-app]:

Cloning app templates from https://github.com/aws/aws-sam-cli-app-templates

    -----------------------
    Generating application:
    -----------------------
    Name: sam-app
    Base Image: amazon/nodejs12.x-base
    Dependency Manager: npm
    Output Directory: .

    Next steps can be found in the README file at ./sam-app/README.md
```

## Edit the file

[Example](./sam-app)

## sam build

```
% sam build
```

## sam local invoke

```
% sam local invoke
```

## sam deploy --guided

If there is no ECR repository, create one.

```
% aws ecr create-repository --repository-name lambda-container
```

```
% sam deploy --guided
```

Specify the URI of the repository in Image Repository.
