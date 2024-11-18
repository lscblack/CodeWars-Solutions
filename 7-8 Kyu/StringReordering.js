const reorder = (array) => {
    return array
      .sort((a, b) => {
        const keyA = parseInt(Object.keys(a)[0]);
        const keyB = parseInt(Object.keys(b)[0]);
        return keyA - keyB;
      })
      .map(item => Object.values(item)[0]).join(" ");
  };
  
  let List = [
    { '4': 'dog' }, { '2': 'took' }, { '3': 'his' },
    { '-2': 'Vatsan' }, { '5': 'for' }, { '6': 'a' }, { '12': 'spin' }
  ];
  
  console.log(reorder(List));
