import Head from 'next/head'
import Image from 'next/image'
import CommonNavbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (


    <div >
   <Head>
      <title>Portfolio</title>
      </Head>

      <video autoPlay muted loop id={styles.myVideo}>
  <source src="/techVideo2.mp4" type="video/mp4" />
  Your browser does not support HTML5 video.
</video>

<div className={styles.content}>
<CommonNavbar />

<div className={styles.headContent} >
<h2 className={styles.mainHead} >Making ideas come alive
on the <span className="tag" >internet</span></h2>

</div>

</div>


  
    </div>
  )
}
