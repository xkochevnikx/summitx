FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && apt install -y curl bash
RUN curl -sL https://deb.nodesource.com/setup_20.x | sh -
RUN npm install -g yarn
