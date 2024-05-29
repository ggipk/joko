const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-200 text-sm text-gray-500">
      <table className="w-full text-center">
        <tbody>
          <tr>
            <td className="border px-6 py-2 border-gray-300">로그인</td>
            <td className="border px-6 py-2 border-gray-300">고객센터</td>
            <td className="border px-6 py-2 border-gray-300">앱다운로드</td>
            <td className="border px-6 py-2 border-gray-300">pc버전</td>
          </tr>
        </tbody>
      </table>
      <div className="pt-5 mb-3">
        이용약관 | 개인정보 처리 방침 | 위치기반 서비스 이용약관
      </div>
    </div>
  );
};

export default Footer;
