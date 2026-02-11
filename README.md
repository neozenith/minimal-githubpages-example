# Minimal Github Pages Example

## 1. Initial Setup

1. Create a new repo on github
2. Go to `https://github.com/{your_user_name}/{your_repo_name}/settings/pages`
3. Under **Build and Deployment**, change the dropdown from `Deploy from Branch` to `Github Actions`
4. Whilst we are here tick the box for **Enforce HTTPS**.
5. You will be presented with two premade Github Action Templates, choose the **Static HTML** option by clicking it's **Configure** button.
6. This will open an edit screen for `.github/workflows/static.yml`. No need to make changes, simply click **Commit Changes** and again when the box pops up asking for a commit message.

## 2. Create Content

1. create a `index.html`, `styles.css` and `scripts.js` in the root of the repo.
2. Look at the content of this example repo for the specifics.

## 3. Deployment

1. Every time you commit to `main` or merge code to `main`, the Github Action takes a copy of your code and publishes it to Github's CDN caches.
  1. Details of each run are at: `https://github.com/{your_user_name}/{your_repo_name}/actions/workflows/static.yml`
2. It will deploy to `https://{your_user_name}.github.io/{your_repo_name}` so that you can have a website for every repo / project you have.

## 4. Your personal blog

1. If you name a repo `{your_user_name}.github.io` and publish a Github Pages deployment, that one is special and will deploy to `https://{your_user_name}.github.io/`
2. There is [plenty of documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) on how to associate a custom domain name to replace the `{your_user_name}.github.io` with `yourdomain.com`.
