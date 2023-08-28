import Animation from "@/app/components/Animation";

export default function Home() {
  return (
    <>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
                    안녕하세요. 써니입니다. <br />
                    오늘도 열심히 코딩합시다!
                </h1>
                <p className="mb-8 leading-relaxed text-darkBasicColor">사랑의 과실이 보배를 생생하며, 있음으로써 지혜는 그들의 동산에는 것은 있다. 거친 수 없는 생명을 갑 방황하였으며, 눈이 능히 트고, 교향악이다. 같지 이상, 있음으로써 칼이다. 이상 보이는 무엇을 군영과 시들어 피어나기 아니다. 보이는 이상은 위하여서 사람은 인생의 이상을 실로 황금시대다. 착목한는 모래뿐일 피가 할지라도 것이다. 있는 풀이 살 피어나기 두기 들어 것이다. 어디 인간의 이상 것은 있는 것이다. 미인을 미묘한 위하여서 천지는 밝은 가치를 유소년에게서 끓는다. 끓는 별과 두기 얼마나 있으며, 살 찾아 곧 아니다.</p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">프로젝트 보러가기</button>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                {/* 로티 이미지 넣기 */}
                <Animation />
                {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
                </div>
            </div>
        </section>
    </>
  )
}



// http://hangul.thefron.me/  - 더미 한글파일
/* https://lottiefiles.com/ 무료 로티파일 : 다운로드 -> 로티제이슨 파일로 다운받기
    https://github.com/mifi/react-lottie-player  - 리액트 로티 플레이어 설치
*/