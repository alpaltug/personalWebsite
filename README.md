# Personal Portfolio Website for Alp Altug

This project is a personal portfolio website for Alp Altug, built using the Strata template from HTML5 UP.

## Deployment Instructions (AWS EC2 - Apache & PHP)

These instructions assume you have an AWS EC2 instance running a Linux distribution (e.g., Amazon Linux 2 or Ubuntu) with Apache web server and PHP installed and configured.

1.  **Connect to your EC2 Instance:**
    Use SSH to connect to your EC2 instance.
    ```bash
    ssh -i /path/to/your-key-pair.pem ec2-user@your-ec2-public-dns
    ```
    (Replace `/path/to/your-key-pair.pem` and `your-ec2-public-dns` with your actual key pair path and EC2 instance DNS).

2.  **Navigate to Web Root Directory:**
    The web root directory for Apache is typically `/var/www/html/`.
    ```bash
    cd /var/www/html/
    ```

3.  **Remove Default Apache Content (Optional but Recommended):**
    If there are default Apache files, you might want to remove or move them.
    ```bash
    sudo rm -rf *
    ```

4.  **Upload Website Files:**
    You can upload the website files (the entire `personal_website` directory contents) to this `/var/www/html/` directory using various methods:
    *   **SCP (Secure Copy Protocol):** From your local machine, navigate to the directory containing the `personal_website` folder and run:
        ```bash
        scp -r -i /path/to/your-key-pair.pem /path/to/local/personal_website/* ec2-user@your-ec2-public-dns:/var/www/html/
        ```
    *   **Git:** If your project is in a Git repository, you can clone it directly into the web root.
        ```bash
        sudo git clone your-repo-url .
        ```
    *   **FTP/SFTP Client:** Use a client like FileZilla or Cyberduck to upload the files.

5.  **Set Permissions:**
    Ensure Apache has the necessary permissions to read the files. The `ec2-user` might own the files after SCP, so you might need to change ownership or permissions.
    ```bash
    sudo chown -R apache:apache /var/www/html/
    sudo chmod -R 755 /var/www/html/
    ```
    (On Ubuntu, the Apache user is often `www-data` instead of `apache`):
    ```bash
    sudo chown -R www-data:www-data /var/www/html/
    sudo chmod -R 755 /var/www/html/
    ```

6.  **Ensure PHP is Working:**
    The `info.php` and `process_form.php` files require PHP. Make sure your Apache server is configured to process PHP files (e.g., `libapache2-mod-php` for Ubuntu or `php` package for Amazon Linux).
    You might need to restart Apache for changes to take effect:
    ```bash
    sudo systemctl restart httpd  # For Amazon Linux, CentOS, RHEL
    # or
    sudo systemctl restart apache2 # For Ubuntu, Debian
    ```

7.  **Test Your Website:**
    Open a web browser and navigate to your EC2 instance's public IP address or public DNS name. You should see Alp Altug's portfolio website.

## File Structure

*   `index.html`: Main landing page.
*   `cv.html`: Curriculum Vitae page.
*   `projects.html`: Projects showcase page (placeholder).
*   `blog.html`: Blog page (placeholder).
*   `media.html`: Media gallery page (placeholder).
*   `projectCharisius.html`, `reachBIOS.html`, `jetsonFix.html`, `sanityCheck.html`: Additional placeholder pages.
*   `Alp_Altug_Resume.pdf`: Placeholder resume PDF.
*   `process_form.php`: Placeholder PHP script for form processing.
*   `info.php`: Placeholder PHP script to display PHP information.
*   `assets/`: Contains CSS, JavaScript, and SASS files.
    *   `css/main.css`: Main stylesheet.
    *   `js/`: Contains JavaScript files including `main.js` and `scroll-to-top.js`.
*   `images/`: Contains images used in the website (currently placeholders).
*   `README.md`: This file.

## Customization

*   **Content:** Edit the HTML files (`.html`) to update text, project details, blog posts, etc.
*   **Images:** Replace placeholder images in the `images/` directory with actual images. Ensure paths in HTML files are updated if filenames change.
*   **Styling:** Modify `assets/css/main.css` or the SASS files in `assets/sass/` (if you are using SASS for development) to change the website's appearance.
*   **Resume:** Replace `Alp_Altug_Resume.pdf` with Alp Altug's actual resume.
*   **PHP Scripts:** Update `process_form.php` to handle actual form submissions (e.g., send emails) and `info.php` as needed.

This website is based on the Strata template by HTML5 UP, which is free for personal and commercial use under the CCA 3.0 license.

