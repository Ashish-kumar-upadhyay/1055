import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import MyArticles from "./pages/MyArticles";
import Header from "./components/Header";
import SignUp from "./pages/SignIn";
import ArticleForm from "./pages/ArticlePage";
import User from "./pages/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/my-articles" element={<MyArticles />} />
        <Route path="/" element={<SignUp/>} />
        <Route path="/article" element={<ArticleForm/>} />
        <Route path="/user" element={<User/>} />
      </Routes>
    </Router>
  );
}

export default App;
