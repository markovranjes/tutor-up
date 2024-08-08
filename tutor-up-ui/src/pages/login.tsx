export const Login = () => {
  return (
    <div className="page login_page">
      <span className="login_page_title">Tutor UP</span>

      <div className="login_block">
        <div className="login_field">
          <span className="login_field_title">Email </span>
          <input className="login_input" />
        </div>
        <div className="login_field">
          <span className="login_field_title">Password </span>
          <input className="login_input" type="password" />
        </div>
        <button>Login</button>
        <span className="login_create_account">Don't have an account?</span>
        <a href="/signup">Create one here</a>
      </div>
    </div>
  );
};
