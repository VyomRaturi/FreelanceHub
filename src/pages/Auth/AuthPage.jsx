import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <AuthForm />
      </div>
    </section>
  );
};

export default AuthPage;
