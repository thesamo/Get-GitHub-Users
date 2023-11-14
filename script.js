

const users = document.querySelector(".users");
const input = document.querySelector(".input");
const card = document.querySelector(".card");
const img = document.querySelector(".avatar");
const userInfo = document.querySelector(".user-info");
const userName = document.querySelector(".user-name");
const userBio = document.querySelector(".user-bio");
const userFollowers = document.querySelector(".user-followers");
const userFollowing = document.querySelector(".user-following");
const userRepos = document.querySelector(".user-repos");
const repos = document.querySelector(".repos")
const repo = document.querySelector(".repo")




input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      const baseUrl = `https://api.github.com/users/${input.value}`;
      const getUrl = async () => {
        try {
          const response = await fetch(baseUrl);
          const data = await response.json();
          console.log(data);
          input.value = "";
  
          if (data.login) {
            img.src = data.avatar_url;
            userName.textContent = data.name;
            userBio.textContent = data.bio;
            userFollowers.textContent = `${data.followers} Followers`;
            userFollowing.textContent = `${data.following} Following`;
            userRepos.textContent = `${data.public_repos} Repos`;
  
            card.style.display = "flex";
            card.style.backgroundColor = "#4c2885";
            card.style.borderRadius = "20px";
            card.style.boxShadow =
              "0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(0, 0, 0, 0.1)";
            card.style.padding = "3rem";
            card.style.marginTop = "30px";
            card.style.fontFamily = "'Poppins', sans-serif";
            
  
          }else{
            userInfo.style.display = "none";
            img.style.display = "none";
            card.innerHTML = `<h2>No profile with this username</h2>`;
          }
          
        } catch (error) {
          console.error("Bir xəta ilə qarşılaşıldı':", error);
        }
      };
  
      getUrl();
    }
  });
  
