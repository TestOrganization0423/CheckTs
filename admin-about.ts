 async checkDocker() {
    return await this.requests.get<DockerVolumeText>(routes.docker);
  }
