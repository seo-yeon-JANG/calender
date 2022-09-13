const suYeon = document.getElementById('sy');
suYeon.style.flexDirection = 'column';
for(let j=0; j<4; j++){ 
    //7칸 생성한 뒤 줄바꿈 ?
    const seo = document.createElement('div');
    seo.style.display = 'flex';
    seo.style.flexDirection = "row";
    for(let i=0; i<7 ; i++){
        const createEl = document.createElement('div');
        createEl.className = 'box';
        createEl.textContent='1'
        seo.append(createEl); //javascript로 html 생성
    }
    suYeon.append(seo);
}   
