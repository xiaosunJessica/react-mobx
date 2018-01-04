import mobx, { observable, action } from 'mobx'

mobx.useStrict(true); // 不允许在动作之外进行状态修改

class Store {
  @observable githubProjects = []
  @observable state = "pending"

  @action
  fetchProjects() {
    this.githubProjects = [];
    this.state = "pending";
    fetchGithubProjectsSomehow().then(this.fetchProjectsSuccess, this.fetchProjectError
    )

    @action.bound 
    fetchProjectsSuccess(projects) {
      const filteredProjects = somePreprocessing(projects);
      this.githubProjects = filteredProjects;
      this.state = 'done'
    }

    @action.bound 
    fetchProjectError(error) {
      this.state = 'error'
    }
  }
}
