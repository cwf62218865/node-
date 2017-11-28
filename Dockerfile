# 使用说明 该文件必须位于该项目根目录
# 且使用 docker builed -t  xxxx:xx . 创建镜像
# 运行容器 docker run -d xxx:xx
#FROM centos:6
FROM weixinweb/nodejs
MAINTAINER liupengyan@cbsd-pro.com

#安装nodejs依赖
#RUN yum -y install gcc-c++ openssl-devel

#切换工作目录
#WORKDIR /opt/

#下载node
#ADD  https://nodejs.org/dist/v6.2.0/node-v6.2.0-linux-x64.tar.gz  /opt/

#解压文件
#RUN tar -zxvf node-v6.2.0-linux-x64.tar.gz

#重命名 node
#RUN mv node-v6.2.0-linux-x64 nodejs

#设置nodejs环境变量
#ENV PATH=$PATH:/opt/nodejs/bin

# 创建应用文件夹
#RUN mkdir -p /opt/nodeserver

# 跳转到工作目录
WORKDIR /opt/nodeserver

# 获取应用源代码
#COPY . /opt/nodeserver

# 安装项目依赖
RUN npm install

# 导出端口
EXPOSE 80

# 启动项目
CMD [ "npm", "start" ]
