

import { gql } from "@apollo/client";
import { useState,useEffect } from 'react'
import client from "../apollo-client";
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  const [headerItems,setHeaderItems] = useState([]);
  const [footerItems,setFooterItems] = useState([])
  useEffect(() => {
    const getSettings = async () =>{
      const { data } = await client.query({
        query: gql`
        query SETTINGS_QUERY {
          settings {
            header_menu_config
            footer_menu_config
          }
        }
      `,
      });
      console.log({data})
      setHeaderItems(JSON.parse(data.settings.header_menu_config).items);
      setFooterItems(JSON.parse(data.settings.footer_menu_config).items);
    }
    getSettings()

  }, [])

  return (
    <>
      <Header items={headerItems}/>
      <main>{children}</main>
      <Footer items={footerItems}/>
    </>
  )
}

// Layout.getInitialProps = async () => {
//   const { data } = await client.query({
//     query: gql`
//     query SETTINGS_QUERY {
//       settings {
//         header_menu_config
//         footer_menu_config
//         home_title_gr
//         home_title_en
//         home_content_gr
//         home_content_en
//         home_image_public_id
//       }
//     }
//   `,
//   });
// console.log({data})
//   return { 				header: JSON.parse(data.settings.header_menu_config),
//     footer: JSON.parse(data.settings.footer_menu_config),
//     homeTitleGr: data.settings.home_title_gr,
//     homeTitleEn: data.settings.home_title_en,
//     homeContentGr: data.settings.home_content_gr,
//     homeContentEn: data.settings.home_content_en,
//     homeImage: data.settings.home_image_public_id }
// }


