package com.usst.jy;

/**
 * @author jy
 * @time 下午7:11:19
 */
public class Article {
	private String title;
	private String content;
	private String date;

	/**
	 * @param title
	 * @param content
	 * @param date
	 */
	public Article(String title, String content, String date) {
		super();
		this.title = title;
		this.content = content;
		this.date = date;
	}

	/**
	 * @param title
	 * @param date
	 */
	public Article(String title, String date) {
		super();
		this.title = title;
		this.date = date;
	}

	/**
	 * @return the title
	 */
	public String getTitle() {
		return title;
	}

	/**
	 * @param title
	 *            the title to set
	 */
	public void setTitle(String title) {
		this.title = title;
	}

	/**
	 * @return the content
	 */
	public String getContent() {
		return content;
	}

	/**
	 * @param content
	 *            the content to set
	 */
	public void setContent(String content) {
		this.content = content;
	}

	/**
	 * @return the date
	 */
	public String getDate() {
		return date;
	}

	/**
	 * @param date
	 *            the date to set
	 */
	public void setDate(String date) {
		this.date = date;
	}
}
