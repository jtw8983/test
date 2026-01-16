import fs from 'fs'

const getData = () =>{
    const f = fs.readFileSync('./data/memo.json', 'utf-8')
    return JSON.parse(f)
}

export const addWord = (word) =>{
    if (!word.trim()) return;
    const data = getData();

    data.list.push({
    id: Date.now(),
    name: word,
    completed: false
  });
   fs.writeFileSync(
    './data/memo.json',
    JSON.stringify(data),
    'utf-8'
   )
   console.log('추가됨');
}

export const remove = (id) =>{
    const data = getData();
    const numId = Number(id);
    data.list = data.list.filter(item => item.id !== numId);
     fs.writeFileSync(
    './data/memo.json',
    JSON.stringify(data),
    'utf-8'
     )
}

export const update = (id, word) =>{
    const data = getData();
    const numId = Number(id);
    data.list = data.list.map(item =>
    item.id === numId
      ? { ...item, name: word }
      : item
  );
   fs.writeFileSync(
    './data/memo.json',
    JSON.stringify(data),
    'utf-8'
   )
}

export const list = () => {
    const arr = getData()
    for(const v of arr.list){
        getData().list.forEach(v =>
        console.log(v.id, v.name)
        )
    }
};




