import fetch from 'isomorphic-unfetch';


export async function getStaticProps(context) {
    const res = await fetch("http://localhost:3000/api/events");
    const json = await res.json();
    return {
      props: {
        data: json,
      },
    };
  }
  