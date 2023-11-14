const inputEl = document.querySelector('input');

const infoEl = document.querySelector('.info')
const errorEl = document.querySelector('.error')

const URL = 'https://api.github.com/users/'


const getUser = async()=>{
    const text = inputEl.value.trim();
    if(!text){
        showErr({message: 'Please enter a username'})
    }else{
        const res = await fetch(URL + text);

        const data = res.json()
    
        return data;
    }
    
}

const showErr = ({message})=>{
    infoEl.style.display = 'block';
    infoEl.textContent = message
}

const showInfo = ({name}) => {
    infoEl.style.display = 'block';
    infoEl.innerHTML = `<h1>${name}</h1>`;
}

inputEl.addEventListener('keydown',async(e)=>{
    if(e.keyCode === 13){
     const data = await getUser()
        
     if(!data.login){
        showErr(data)
     }else{
        showInfo(data)
     }
     
    }
})