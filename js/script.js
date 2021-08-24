const insertLi = lis =>{
    const ul = document.querySelector('.container');
    ul.innerHTML = lis;
}

fetch(`https://covid19-brazil-api.now.sh/api/report/v1`)
.then(response => response.json())

.then(json => json.data.reduce( (acc, uf) =>{
    return acc += `<li>
    <h2>${uf.state}</h2>
    <p>casos: ${uf.cases}</p>
    <p>óbitos: ${uf.deaths}</p>
    <p>suspeitos: ${uf.suspects}</p>
    <p>data: ${uf.datetime.substring(0, 10)}</p>
    </li>`;
}, ''))
.then(insertLi)