class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault();

        this.repositories.push({
            name: 'Felipe D. Santos',
            description: 'NextDev.',
            avatar_url: 'https://avatars3.githubusercontent.com/u/12199379?s=460&v=4',
            html_url: 'https://github.com/lycan-nt'
        });

        console.log(this.repositories);
    }
}

new App();