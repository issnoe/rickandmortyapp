import { useRouter } from 'next/router';

function RedirectPage({ ctx }) {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    router.push('/characters');
    return;
  }
}

RedirectPage.getInitialProps = (ctx) => {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: '/characters' });
    ctx.res.end();
  }
  return {};
};

export default RedirectPage;
