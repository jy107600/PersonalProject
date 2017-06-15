package com.usst.jy;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class Login
 */
@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Login() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");  //这几句如果不加的话，ajax那里就会抱xml跟元素错误。
		response.setContentType("text/html");
		response.setCharacterEncoding("utf-8");
		String userid = request.getParameter("userid");
		String pwd = request.getParameter("password");
		System.out.println(userid+","+pwd);
//		String status = "1";   // 登陆返回到的状态码，1表示有此用户，2表示无此用户，3表示密码错误
		String role = "辅导员";   //实际上这里的参数要从数据库获取
		String department = "计算机学院";
		String json = userid+","+role+","+department;
		HttpSession session =request.getSession();
		session.setAttribute("json", json);
		PrintWriter pw = response.getWriter();
		pw.print("success");
	}

}
