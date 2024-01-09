const initstate = {
  level: 0,
  username: null,
  refferalID:null,
  placement:null,
  DirectReff:null,
  setModalmsg:null,
  treeParams:10,
  PageState:'dashboard'
};
export default function Reducer(state = initstate, action) {
  switch (action.type) {
    case "level":
      return { ...state, level: action.payload };

    case "username":
      return { ...state, username: action.payload };
    case "refferalID":
      return { ...state, refferalID: action.payload };
    case "placement":
      return { ...state, placement: action.payload };
    case "DirectReff":
      return { ...state, DirectReff: action.payload };
    case "setModalmsg":
      return { ...state, setModalmsg: action.payload };
    case "treeParams":
      return { ...state, treeParams: action.payload };
    case "PageState":
      return { ...state, PageState: action.payload };
      
    default:
      return state;
  }
}