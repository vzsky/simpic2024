import { NextPage } from "next";
import Layout from "../../components/layout";
import Form from "../../components/form/form";
import { questions } from '../../helper/form/userinfo.question'

const MyInfo: NextPage = () => (
  <Layout>
    <Form url={"/api/user/myinfo"} questions={questions} /> 
  </Layout>
)

export default MyInfo
