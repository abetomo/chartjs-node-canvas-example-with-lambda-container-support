FROM public.ecr.aws/lambda/nodejs:12

RUN yum update -y && yum install fontconfig ipa-gothic-fonts ipa-pgothic-fonts -y && yum clean all -y

COPY package.json ./
RUN npm install --production

COPY app.js ./

# Command can be overwritten by providing a different command in the template directly.
CMD ["app.lambdaHandler"]
