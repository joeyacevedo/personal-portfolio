import Layout from '../../components/layout';
//import { getAllPostIds, getPostData } from '../../utils/posts';
import Head from 'next/head';

//>>>>>>>>>>THESE CAN BE USED IN THE FUTURE TO RENDER PROJECT BOX GRIDS
// export async function getStaticPaths() {
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// }

export default function Projects({ postData }) {
  return (
    <Layout>
      <Head>
        <title>Projects - Joseph Acevedo</title>
      </Head>
      <body>
        <h2>Projects:</h2>
        <p>
          [!!Placeholder for future projects... potentially setup as a
          dynamically loaded grid linking to deployed applications]
        </p>
      </body>
    </Layout>
  );
}
