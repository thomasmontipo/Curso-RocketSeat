function useState(){
    let state: string| number;
    function get(){
        return state;
    }

    function set (newValue: number | string){
        state = newValue;
    }

    return {get, set};


  }

  let newState = useState();
  newState.get();
  newState.set('Thomas Henrique Montipó Guimarães');