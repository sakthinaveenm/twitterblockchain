import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa';
import { format } from 'timeago.js';

const style={
  wrapper : `flex p-3 border-b border-[#38444d]`,
  profileImage : `rounded-full h-[40px] w-[40px] object-cover`,
  postMain:`flex-1 px-4`,
  headerDetails:`flex items-center`,
  name:`font-bond mr-1`,
  verified :`text-[0.8rem]`,
  handleAndTimeAgo : `text-[#8899a6] m1-1`,
  tweet:`my-2`,
  image:`rounded-3x1`,
  footer : `flex justify-between mr-28 mt-4 text-[#8899a6]`,
  footerIcon : `rounded-full text-lg p-2`
}
 









export default function Post({displayName,userName,avatar,text,isProfileimageNft,timestamp}) {
  return (
    <div className={style.wrapper}>
      <div>
        <img src={avatar} alt='' 
          className={
            isProfileimageNft ? `${style.profileImage} smallHex` : `${style.profileImage}`
          }
        />
      </div>
      <div className={style.postMain}>
          <div>
            <span className={style.headerDetails}>
              <span className={style.name}>
              {displayName}
              </span>
              {
                isProfileimageNft && (
                  <span className={style.verified}>
                    <BsFillPatchCheckFill />
                  </span>
                )
              }
               <span className={style.handleAndTimeAgo}>
              @ {userName} &#x25cf; {format(new Date(timestamp))}
            </span>
            </span>
           <div className={style.tweet}>
             {text}
           </div>
          </div>
              <div>
                <div className={style.footer}>
                  <div className={`${style.footerIcon} hover:bg-[#1e364a] hover:text-[#1d9bf0]`}>
                    <FaRegComment />
                    </div>
                </div>
              </div>
      </div>
    </div>
  )
}
