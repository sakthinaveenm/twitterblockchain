import Sidebar from "../components/Sidebar/Sidebar"
import Feed from "../components/Feed/Feed"
const style = {
  wrapper : `flex justify-center h-screen w-screen user-none bg-[#15202b] text-white`,
  content : `max-w-[1400px] w-2/3 flex justify-between`,
} 

export default function Home() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar/>
        <Feed/>
        <h3>Pane 3</h3>
      </div>
    </div>
  )
}
