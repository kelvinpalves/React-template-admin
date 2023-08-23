import { MoonIcon } from "../components/icons";
import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notifications() {
  const { toggleTheme} = useAppData()

  return (
      <Layout title="Notificaçôes"
        subtitle="Aqui você irá gerenciar as notificações">
      </Layout>
  )
}