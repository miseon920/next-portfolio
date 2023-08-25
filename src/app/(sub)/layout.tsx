// import '@/assets/style/globals.css' // 따로쓰지 않아도 메인 layout과 중첩되어 

export default function SubLayout({
    children, //요소를 넣으므로 children 사용
  }: {
    children: React.ReactNode
  }) {
    return (
    <>
        {children}
    </>
    )
  }

  /**
   * 루트 레이아웃에서만 html과 body가 포함될수 있다.
   * 레이아웃은 루트레이아웃 -> 세부 레이아웃으로 중첩된다.
   * 
   * 루트 레이아웃은 기본적으로 서버 컴포넌트이며 클라이언트 컴포넌트로 설정할 수 없다.
   * 
   * +++ 템플릿 (레이아웃과페이지를 감싸는대 사용됨)
   * Templates는 주로 특정 페이지 전환 시 애니메이션 효과를 적용하거나, 특정 페이지에서만 필요한 기능을 관리하는 데 사용됩니다.
   */