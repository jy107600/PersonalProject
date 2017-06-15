package com.usst.jy;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;

/**
 * Servlet implementation class showArticle
 */
@WebServlet("/showArticle")
public class showArticle extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public showArticle() {
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
		String num = request.getParameter("num");   //传递的文章列表的数量；
		int listNum = Integer.parseInt(num);    
		System.out.println(listNum);

		Article[] alist = new Article[listNum];
		for (int i = 0; i < alist.length; i++) {
			alist[i] = new Article("第"+i+"篇标题","2017-3-2"+i);
		}
		String jsonString = JSON.toJSONString(alist);
		PrintWriter pw = response.getWriter();
		pw.print(jsonString);
		doGet(request, response);
	}

}
