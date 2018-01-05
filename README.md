# zillow client demo

Build with Reactjs

main bootstrap components used:
1. bootstrap
2. reactstrap

routes:
 1. router-dom
 
 
 Amoeba Algorithm:
 
```
populationGrowth(length) {
        let adults = this.state.adults;
        let kids = this.state.kids;
        for (let i = 0; i <= length; i++) {
            if (i === 0) {
                adults = 0;
                kids = 1;
            } else if (i === 1) {
                adults = kids;
                kids = 0;
            } else {
                const oldKids = kids;
                kids = adults;
                adults = adults + oldKids;
            }
        }
        this.setState({
            adults, kids
        });
    }
    ```
    
  Front End assumption: Text/UI did not change much.
  
  Start on your local:
  run commands in your terminal project space.
  1. npm i
  2. npm run build
  3. npm run start
  
  
  Deployment:
  on an EC2 server
  1. npm run build (in project terminal to generate build files).
  on instance
  2. install nginx
  3. install node /nvm/npm
  4. under root directory /var/www mkdir PROJECT_NAME
  5. configure nginx to root /var/www/PROJECT_NAME/build/
  couple of options to directly clone git repo onto the instance or more preferrebly for me to only SFTP build bundle files for nginx to run.  
  
