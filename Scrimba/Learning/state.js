class App {
  constructor() {
    this.state = {
        isAuth: false,
    };
    this.checkAuth();
    this.render();
  }

  checkAuth() {
    const user = false;
    if (user) {
      this.state = {...this.state, isAuth: true}; 
    } else {
      this.state = {...this.state, isAuth: false};
    }
    console.log(this.state);
  }

  render() {
    document.getElementById("root").innerHTML = `
      <div>
        ${this.state.isAuth ? "Welcome Back!" : "Please Sign In!"}
      </div>
    `;
  }
}

new App();
