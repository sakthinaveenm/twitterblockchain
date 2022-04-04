import {BsStars} from 'react-icons/bs'
import TweetBox from '../TweetBox/TweetBox'
import Post from '../Post/Post'


const style = {
    wrapper : `flex-[2] border-r border-l border-[#38444d]`,
    header : `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle : `text-xl font-bold`
}

export default function Feed() {

  const tweets = [
    {
      displayName :"Bala",
      userName : '0xs78dvt026782Ho92f0JCw82L821fD',
      avatar : 'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbiUyMGZhY2V8ZW58MHx8MHx8&w=1000&q=80',
      text : 'gm',
      isProfileimageNft : false,
      timestamp : '2020-05-01T12:00:00.000Z'

    },
    {
      displayName :"Bala",
      userName : '0xs78dvt026782Ho92f0JCw82L821fD',
      avatar : 'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbiUyMGZhY2V8ZW58MHx8MHx8&w=1000&q=80',
      text : 'gm',
      isProfileimageNft : false,
      timestamp : '2020-05-01T12:00:00.000Z'

    },{
      displayName :"Bala",
      userName : '0xs78dvt026782Ho92f0JCw82L821fD',
      avatar : 'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbiUyMGZhY2V8ZW58MHx8MHx8&w=1000&q=80',
      text : 'gm',
      isProfileimageNft : true,
      timestamp : '2020-05-01T12:00:00.000Z'

    } ,{
      displayName :"Bala",
      userName : '0xs78dvt026782Ho92f0JCw82L821fD',
      avatar : 'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbiUyMGZhY2V8ZW58MHx8MHx8&w=1000&q=80',
      text : 'gm',
      isProfileimageNft : false,
      timestamp : '2022-03-24T12:00:00.000Z'

    },{
      displayName :"Bala",
      userName : '0xs78dvt026782Ho92f0JCw82L821fD',
      avatar : 'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbiUyMGZhY2V8ZW58MHx8MHx8&w=1000&q=80',
      text : 'gm',
      isProfileimageNft : true,
      timestamp : '2020-05-01T12:00:00.000Z'

    }
  ]

  return (
    <div className={style.wrapper}>
        <div className={style.header}>
            <div className={style.headerTitle}>Home</div>
            <BsStars />
        </div>
        <TweetBox />
        {
          tweets.map((tweet,index)=>(
            <Post 
            displayName={tweet.displayName}
            userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`}
            avatar={tweet.avatar}
            text={tweet.text}
            isProfileimageNft={tweet.isProfileimageNft}
            timestamp={tweet.timestamp}
            key={index}
            />
          ))
        }
    </div>
  )
}
