import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Adjustments() {
  const data = useAppData()
  return (
      <Layout title="Ajustes & Configurações" 
      subtitle="Personalize as configurações do seu perfil">
        <h3>Conteúdo!!!!</h3>
      </Layout>
  )
}