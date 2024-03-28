import React, { createContext, useContext, useEffect, useState, useReducer } from 'react';
import {useNavigate} from "react-router-dom"

const UserContext = createContext();
export const useGlobalContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [tradesManProfileId, setTradesManProfileId] = useState(null)
  const [tradesmanProfiles, setTradesmanProfiles] = useState([]);
  const [searchedLocation, setSearchedLocation] = useState(null)
  const [tradesmanProfileDetails, setTradesmanProfileDetails] = useState(null);
  const [tradesManProfile, setTradesManProfile] = useState({
    tradeType: "", location: "", phoneNumber: null, description: "",
    hourlyRate: 0,image:"", gigImage1:'', gigImage2:'', gigImage3:''
  })
const [isLogedUser,setLogedUser] = useState()
  // ----------------------------------------------------------------
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();
  const [query,setQuery] = useState({});
  const navigate = useNavigate();

  const userLoginInfo = JSON.parse(localStorage.getItem("token"))
  useEffect(() => {
    if(userLoginInfo && userLoginInfo?.user !== undefined) {
      setLogedUser(userLoginInfo)
    }
    setUser(userLoginInfo?.user);
    
    // if (!userInfos) navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);
  

  useEffect(()=> {
    setTradesmanProfileDetails(tradesmanProfileDetails)
  }, [tradesmanProfileDetails])

  return (
    <UserContext.Provider value={{ tradesManProfile, setTradesManProfile, searchedLocation, setSearchedLocation,
    tradesmanProfiles, userLoginInfo, tradesmanProfileDetails, setTradesmanProfileDetails, tradesManProfileId, setTradesManProfileId,
    selectedChat, setSelectedChat,  user, setUser, notification, setNotification, chats,
    setChats, query,setQuery,setTradesManProfile,tradesManProfile,isLogedUser,setLogedUser
    }}>
    {children}
    </UserContext.Provider>
  );
};
