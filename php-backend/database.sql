-- Admin Users Table
CREATE TABLE IF NOT EXISTS admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Default admin user: inymartlabs / inymartlabs@2026
INSERT INTO admin_users (username, password_hash) 
VALUES ('inymartlabs', '$2y$10$tZ2yD0L.y0892z5/C5k0fOnOq1.7.g/l4J.gJ7hL9/9j.j.L/i.y.')
ON DUPLICATE KEY UPDATE username=username;

-- Admin Tokens Table
CREATE TABLE IF NOT EXISTS admin_tokens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    admin_id INT NOT NULL,
    token VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    slug VARCHAR(255) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    excerpt TEXT,
    content LONGTEXT,
    category VARCHAR(100),
    author VARCHAR(100),
    readingTime VARCHAR(50),
    image VARCHAR(255),
    date DATE NOT NULL,
    status ENUM('LIVE', 'DRAFT') DEFAULT 'DRAFT',
    sections JSON,
    faqs JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert initial dummy data
INSERT IGNORE INTO blog_posts (slug, title, excerpt, content, category, author, readingTime, image, date) 
VALUES (
    'future-of-ai-seo', 
    'The Future of AI SEO: How Artificial Intelligence is Reshaping Search', 
    'Discover how AI is revolutionizing search engine optimization, from generative AI in search results to automated content strategies that drive real growth.', 
    '<h2>The Rise of AI in Search</h2><p>Search engines are evolving faster than ever. With the integration of AI-powered features like Google''s Search Generative Experience (SGE), traditional ranking factors are being augmented by machine learning algorithms that understand user intent on a conversational level.</p><h2>Why Your Strategy Needs to Change</h2><p>Keyword stuffing and thin content have been dead for years, but AI makes search engines even smarter at detecting low-value content. Now, the focus is entirely on <strong>E-E-A-T</strong> (Experience, Expertise, Authoritativeness, Trustworthiness). AI tools can help analyze data, but human expertise is what truly ranks.</p><h3>1. Embracing Generative Answers</h3><p>Users are increasingly getting direct answers without clicking a link. To survive, websites must optimize for long-tail, conversational queries and aim to be the source material that AI quotes.</p><h3>2. Automating the Routine</h3><p>While AI shouldn''t write your final copy unchecked, it is incredible for automating routine SEO tasks like meta description generation, keyword clustering, and technical site audits.</p><h2>The Inymart Labs Approach</h2><p>At Inymart Labs, we blend cutting-edge AI tools with deep human expertise to craft AI SEO strategies that keep businesses in Tamil Nadu ahead of algorithm updates.</p>', 
    'AI SEO', 
    'Inymart Admin', 
    '5 min read', 
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    '2026-08-14'
);