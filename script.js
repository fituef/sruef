// ============================================
// PROJECT DATA
// ============================================

const projectData = {
    1: {
        title: "Smart AI Assistant",
        category: "Trí Tuệ Nhân Tạo",
        description: "Phát triển trợ lý AI thông minh với khả năng học máy nâng cao. Dự án này tập trung vào việc xây dựng một hệ thống AI có thể hiểu và phản hồi các câu hỏi phức tạp của người dùng. Sử dụng các kỹ thuật NLP tiên tiến và deep learning để cải thiện độ chính xác.",
        objectives: [
            "Phát triển model NLP với độ chính xác trên 95%",
            "Tích hợp Multi-language Support cho 10+ ngôn ngữ",
            "Triển khai trên Cloud Infrastructure",
            "Cải thiện hiệu suất xử lý 50%"
        ],
        technologies: ["Python", "TensorFlow", "PyTorch", "NLP", "Deep Learning", "Cloud API", "Docker", "Kubernetes"],
        achievements: [
            "Hoàn thành trong 8 tháng với ngân sách hợp lý",
            "Đạt độ chính xác 96.5% trên test set",
            "Giảm thời gian phản hồi xuống 200ms",
            "Đạt giải Best AI Innovation Award 2023",
            "Được sử dụng bởi hơn 50,000 người dùng"
        ],
        year: 2023,
        status: "Hoàn Thành",
        budget: "$500,000",
        team: 5,
        members: [
            { name: "Dr. Nguyễn Văn A", role: "Lead" },
            { name: "Lê Minh B", role: "Backend" },
            { name: "Trần Thị C", role: "ML Engineer" },
            { name: "Phạm Hoàng D", role: "Frontend" },
            { name: "Đỗ Vanh E", role: "DevOps" }
        ]
    },
    2: {
        title: "Gene Therapy Platform",
        category: "Sinh Học Phân Tử",
        description: "Nền tảng liệu pháp gen hiện đại cho điều trị bệnh di truyền. Dự án kết hợp công nghệ CRISPR và bioinformatics để phát triển các liệu pháp gen tiên tiến. Nền tảng này cho phép nhà khoa học thiết kế và kiểm thử các liệu pháp một cách hiệu quả.",
        objectives: [
            "Phát triển CRISPR targeting system với độ cụ thể cao",
            "Xây dựng database Gen lớn hơn 1 triệu sequence",
            "Tạo công cụ phân tích bioinformatics tích hợp",
            "Thử nghiệm lâm sàng ban đầu trên 100 bệnh nhân"
        ],
        technologies: ["Bioinformatics", "CRISPR", "Python", "Machine Learning", "Database", "Genomics", "Docker", "React"],
        achievements: [
            "Phát triển 3 ứng dụng CRISPR thành công",
            "Công bố 5 bài báo trong Nature Biotechnology",
            "Giảm chi phí liệu pháp gen 40%",
            "Đạt cấp phép lâm sàng từ FDA",
            "Kỹ thuật được sử dụng tại 15 bệnh viện"
        ],
        year: 2023,
        status: "Đang Phát Triển",
        budget: "$1,200,000",
        team: 8,
        members: [
            { name: "TS. Trần Thị B", role: "Lead" },
            { name: "Nguyễn Hải C", role: "Biologist" },
            { name: "Võ Minh D", role: "Bioinformatics" },
            { name: "Lý Như E", role: "Lab Tech" },
            { name: "Huỳnh Anh F", role: "Software" },
            { name: "Tạ Triều G", role: "Data Analysis" },
            { name: "Phổ Vũ H", role: "Researcher" },
            { name: "Dương Chí I", role: "UI/UX" }
        ]
    },
    3: {
        title: "Green Energy Grid",
        category: "Năng Lượng Tái Tạo",
        description: "Hệ thống lưới năng lượng xanh thông minh cho các thành phố. Dự án này phát triển một hệ thống quản lý năng lượng tích hợp AI để tối ưu hóa việc sử dụng năng lượng tái tạo từ mặt trời, gió và các nguồn khác.",
        objectives: [
            "Xây dựng mạng lưới năng lượng phân tán",
            "Giảm tiêu thụ năng lượng thành phố 35%",
            "Tích hợp pin năng lượng lớn quy mô",
            "Đạt 100% năng lượng tái tạo vào 2025"
        ],
        technologies: ["Smart Grid", "IoT", "Machine Learning", "Renewable Energy", "Battery Tech", "Cloud", "Real-time Analytics", "Python"],
        achievements: [
            "Cung cấp năng lượng cho 50,000 hộ gia đình",
            "Giảm phát thải CO2 100,000 tấn/năm",
            "Tiết kiệm chi phí năng lượng $2 triệu/năm",
            "Giải Best Green Innovation Award 2022",
            "Model được áp dụng tại 8 thành phố"
        ],
        year: 2022,
        status: "Hoàn Thành",
        budget: "$800,000",
        team: 6,
        members: [
            { name: "Dr. Lê Văn C", role: "Lead" },
            { name: "Ngô Thanh D", role: "Engineer" },
            { name: "Hồ Mỹ E", role: "IoT Dev" },
            { name: "Bùi Quốc F", role: "Hardware" },
            { name: "Vũ Thị G", role: "Data" },
            { name: "Phan Anh H", role: "Testing" }
        ]
    },
    4: {
        title: "Blockchain Finance",
        category: "Công Nghệ Blockchain",
        description: "Giải pháp tài chính phi tập trung dựa trên blockchain. Dự án phát triển một nền tảng DeFi hoàn chỉnh với các smart contracts, staking, lending và các tính năng tài chính hiện đại khác.",
        objectives: [
            "Phát triển 10+ smart contracts an toàn",
            "Đạt $100 triệu TVL (Total Value Locked)",
            "Hỗ trợ 5+ blockchain khác nhau",
            "Giảm commission xuống dưới 0.1%"
        ],
        technologies: ["Solidity", "Web3.js", "Ethereum", "Polygon", "Smart Contracts", "DeFi", "TypeScript", "React", "PostgreSQL"],
        achievements: [
            "Xử lý hơn 1 triệu giao dịch thành công",
            "TVL vượt quá $150 triệu",
            "Giảm gas fee 60% so với competitors",
            "Audit bởi 3 công ty hàng đầu",
            "Tích hợp với 20+ dApps khác"
        ],
        year: 2023,
        status: "Hoàn Thành",
        budget: "$600,000",
        team: 7,
        members: [
            { name: "TS. Phạm Minh D", role: "Lead" },
            { name: "Đào Huy E", role: "Solidity Dev" },
            { name: "Lý Huân F", role: "Backend" },
            { name: "Trương Thúc G", role: "Frontend" },
            { name: "Vương Tùng H", role: "Security" },
            { name: "Cao Quân I", role: "DevOps" },
            { name: "Sơn Minh J", role: "QA" }
        ]
    },
    5: {
        title: "Quantum Computing Lab",
        category: "Vật Lý Lượng Tử",
        description: "Phòng thí nghiệm máy tính lượng tử với các algos mới. Dự án này phát triển các thuật toán lượng tử mới, xây dựng quantum simulators và tạo framework cho lập trình quantum computing.",
        objectives: [
            "Phát triển 15+ quantum algorithms hiệu quả",
            "Xây dựng quantum simulator với 30+ qubits",
            "Tối ưu hóa quantum error correction",
            "Giải quyết bài toán optimization 1000x nhanh hơn"
        ],
        technologies: ["Qiskit", "Cirq", "Quantum Computing", "Python", "Linear Algebra", "Physics Simulation", "C++", "GPU Computing"],
        achievements: [
            "Phát triển 12 quantum algorithms mới",
            "Giảm quantum noise 45%",
            "Công bố 8 bài báo trong tạp chí hàng đầu",
            "Hợp tác với 5 đại học top world",
            "Giải Best Quantum Research 2023"
        ],
        year: 2023,
        status: "Đang Phát Triển",
        budget: "$900,000",
        team: 6,
        members: [
            { name: "Dr. Hoàng Thị E", role: "Lead" },
            { name: "Cao Minh F", role: "Physicist" },
            { name: "Tô Hữu G", role: "Developer" },
            { name: "Đinh Lực H", role: "Simulator" },
            { name: "Giang Hương I", role: "Researcher" },
            { name: "Kiên Anh J", role: "Documentation" }
        ]
    },
    6: {
        title: "Medical IoT System",
        category: "Công Nghệ IoT",
        description: "Hệ thống IoT y tế giám sát sức khỏe bệnh nhân từ xa. Dự án tích hợp các cảm biến IoT, cloud computing và AI để giám sát sức khỏe bệnh nhân trong thời gian thực, phát hiện bất thường sớm.",
        objectives: [
            "Phát triển 8+ loại cảm biến IoT y tế",
            "Giám sát 10,000+ bệnh nhân đồng thời",
            "Cảnh báo bất thường với độ chính xác 99%",
            "Giảm thời gian phản ứng xuống 5 phút"
        ],
        technologies: ["IoT", "MQTT", "Arduino", "Raspberry Pi", "Node.js", "MongoDB", "React", "Machine Learning", "AWS"],
        achievements: [
            "Giám sát thành công 15,000+ bệnh nhân",
            "Phát hiện bệnh sớm 40% trường hợp",
            "Được phê duyệt bởi Bộ Y Tế",
            "Tiết kiệm chi phí y tế $500,000/năm",
            "Sử dụng tại 25 bệnh viện top"
        ],
        year: 2022,
        status: "Hoàn Thành",
        budget: "$400,000",
        team: 5,
        members: [
            { name: "TS. Đặng Anh F", role: "Lead" },
            { name: "Mạnh Quang G", role: "Hardware" },
            { name: "Huy Khánh H", role: "Firmware" },
            { name: "Nhu Ý I", role: "Backend" },
            { name: "Tùng Duệ J", role: "Frontend" }
        ]
    }
};

// ============================================
// PROJECT MODAL FUNCTIONS
// ============================================

const projectModal = document.getElementById('projectModal');
const projectModalClose = document.querySelector('.modal-close-project');
const projectDetailBtns = document.querySelectorAll('.btn-project-detail');

function openProjectModal(projectId) {
    const project = projectData[projectId];

    // Populate modal with project data
    document.getElementById('modalProjectTitle').textContent = project.title;
    document.getElementById('modalProjectCategory').textContent = project.category;
    document.getElementById('modalProjectDesc').textContent = project.description;
    document.getElementById('modalProjectYear').textContent = project.year;
    document.getElementById('modalProjectStatus').textContent = project.status;
    document.getElementById('modalProjectBudget').textContent = project.budget;
    document.getElementById('modalProjectTeam').textContent = project.team;

    // Objectives with animation
    const objectivesContainer = document.getElementById('modalProjectObjectives');
    objectivesContainer.innerHTML = project.objectives.map((obj, index) =>
        `<li style="animation-delay: ${index * 0.06}s">${obj}</li>`
    ).join('');

    // Technologies with animation
    const techContainer = document.getElementById('modalProjectTech');
    techContainer.innerHTML = project.technologies.map((tech, index) =>
        `<span class="tech-tag" style="animation-delay: ${index * 0.05}s">${tech}</span>`
    ).join('');

    // Achievements with animation
    const achievementsContainer = document.getElementById('modalProjectAchievements');
    achievementsContainer.innerHTML = project.achievements.map((achievement, index) =>
        `<li style="animation-delay: ${index * 0.06}s">${achievement}</li>`
    ).join('');

    // Team members with animation
    const membersContainer = document.getElementById('modalProjectMembers');
    membersContainer.innerHTML = project.members.map((member, index) =>
        `<div class="member-item" style="animation-delay: ${index * 0.05}s">
            <div class="member-name">${member.name}</div>
            <div class="member-role">${member.role}</div>
        </div>`
    ).join('');

    // Show modal
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for project modal
projectDetailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = e.target.closest('.project-card').dataset.project;
        openProjectModal(projectId);
    });
});

projectModalClose?.addEventListener('click', closeProjectModal);

// Close modal when clicking overlay
projectModal?.addEventListener('click', (e) => {
    if (e.target === projectModal || e.target === projectModal.querySelector('.modal-overlay-project')) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal?.classList.contains('active')) {
        closeProjectModal();
    }
});

// ============================================
// MEMBER DATA
// ============================================

const memberData = {
    1: {
        name: "Dr. Nguyễn Văn A",
        position: "Giám Đốc Nhóm - Chuyên Gia AI",
        description: "Tiến sĩ Khoa Học Máy Tính từ MIT với 10+ năm kinh nghiệm trong lĩnh vực Trí tuệ nhân tạo. Dr. A đã dẫn dắt hơn 20 dự án AI thành công và công bố 35+ bài báo khoa học tại các tạp chí hàng đầu. Ông là một nhà lãnh đạo tài ba trong việc xây dựng và phát triển các kiến trúc AI phức tạp.",
        skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Neural Networks", "TensorFlow", "PyTorch", "Reinforcement Learning"],
        achievements: [
            "Google AI Research Award 2022",
            "IEEE Fellow 2023",
            "Best AI Paper ICML 2021",
            "Published 35+ papers in top-tier venues",
            "Led 20+ successful AI projects",
            "Holds 5 patents in AI/ML technologies"
        ],
        papers: "35",
        projects: "20",
        awards: "8",
        email: "nguyen.a@nckh.vn",
        website: "https://drnguyena.com"
    },
    2: {
        name: "TS. Trần Thị B",
        position: "Nhà Nghiên Cứu - Sinh Học Phân Tử",
        description: "Tiến sĩ Sinh Học từ Cambridge, chuyên gia hàng đầu trong công nghệ gen và liệu pháp nhân tạo. TS. B đã thực hiện 15+ dự án nghiên cứu về chỉnh sửa gen CRISPR với những kết quả đột phá. Cô là nhà khoa học công bố công trình nghiên cứu trong các tạp chí khoa học hàng đầu.",
        skills: ["CRISPR Technology", "Gene Therapy", "Molecular Biology", "Genetic Engineering", "Bioinformatics", "Protein Analysis", "Genomics", "Cell Biology"],
        achievements: [
            "Nature Biotechnology Award 2020",
            "Young Scientist Award Cambridge 2021",
            "Breakthrough Achievement in Gene Therapy 2022",
            "30+ publications in molecular biology journals",
            "Developed 3 CRISPR applications",
            "International Patent holder"
        ],
        papers: "30",
        projects: "15",
        awards: "6",
        email: "tran.b@nckh.vn",
        website: "https://drtranb.com"
    },
    3: {
        name: "Dr. Lê Văn C",
        position: "Chuyên Gia - Năng Lượng Tái Tạo",
        description: "Tiến sĩ Kỹ Thuật Điện từ Stanford, 8 năm kinh nghiệm về năng lượng sạch và bền vững. Dr. C đã phát triển 5 công nghệ năng lượng tái tạo được cấp bằng sáng chế quốc tế. Ông được công nhận là một trong những chuyên gia hàng đầu về năng lượng mặt trời và gió.",
        skills: ["Solar Energy", "Wind Power", "Energy Storage", "Smart Grid", "Renewable Technology", "Sustainable Design", "Battery Systems", "Power Electronics"],
        achievements: [
            "Clean Energy Innovation Award 2023",
            "5 International Patents",
            "Stanford Energy Fellowship 2019",
            "Leading 3 major renewable projects",
            "Increased renewable efficiency by 40%",
            "Published 25+ papers on green energy"
        ],
        papers: "25",
        projects: "12",
        awards: "7",
        email: "le.c@nckh.vn",
        website: "https://drlec.com"
    },
    4: {
        name: "TS. Phạm Minh D",
        position: "Nhà Phát Triển - Blockchain",
        description: "Tiến sĩ Khoa Học Máy Tính từ Berkeley, chuyên gia blockchain và cryptography với 6 năm kinh nghiệm. TS. D đã xây dựng 8 ứng dụng blockchain thương mại thành công với hơn 100K người dùng. Ông là một trong những nhà phát triển blockchain nổi tiếng nhất.",
        skills: ["Blockchain Development", "Smart Contracts", "Cryptography", "Web3", "Solidity", "Bitcoin/Ethereum", "DeFi", "Zero-Knowledge Proofs"],
        achievements: [
            "Blockchain Innovation Award 2022",
            "Top Developer Ethereum Foundation",
            "8 Successfully Deployed dApps",
            "Bitcoin Research Fellowship",
            "Developed 3 Layer-2 solutions",
            "100K+ active users across projects"
        ],
        papers: "20",
        projects: "18",
        awards: "5",
        email: "pham.d@nckh.vn",
        website: "https://drphamd.com"
    },
    5: {
        name: "Dr. Hoàng Thị E",
        position: "Nhà Khoa Học - Vật Lý Lượng Tử",
        description: "Tiến sĩ Vật Lý từ Oxford, 6 năm nghiên cứu về máy tính lượng tử và quantum algorithms. Dr. E đang lãnh đạo một trong những dự án quantum computing tiên tiến nhất hiện nay. Cô được công nhận là một trong những nhà khoa học trẻ hàng đầu.",
        skills: ["Quantum Computing", "Quantum Algorithms", "Quantum Cryptography", "Qubit Design", "Quantum Simulation", "Error Correction", "Quantum Machine Learning"],
        achievements: [
            "Quantum Research Excellence Award 2023",
            "Nature Physics Publication 2022",
            "Oxford Quantum Fellowship",
            "Leading 2 quantum computing projects",
            "Developed 3 quantum algorithms",
            "Breakthrough in error correction 2023"
        ],
        papers: "22",
        projects: "14",
        awards: "6",
        email: "hoang.e@nckh.vn",
        website: "https://drhoange.com"
    },
    6: {
        name: "TS. Đặng Anh F",
        position: "Quản Lý Dự Án - Nghiên Cứu",
        description: "Tiến sĩ Quản Lý Công Nghệ từ MIT, 7 năm quản lý các dự án nghiên cứu lớn với tổng ngân sách trên 50 triệu USD. TS. F đã successfully hoàn thành 25+ dự án nghiên cứu đa ngành. Ông là chuyên gia hàng đầu trong quản lý dự án khoa học.",
        skills: ["Project Management", "Research Leadership", "Budget Planning", "Team Coordination", "Risk Management", "Agile Methodology", "Stakeholder Management", "Grant Writing"],
        achievements: [
            "Project Management Excellence 2023",
            "MIT Alumni Award 2021",
            "Successfully Managed $50M+ research projects",
            "25+ Completed interdisciplinary projects",
            "Zero project failures record",
            "Trained 30+ project leaders"
        ],
        papers: "15",
        projects: "25",
        awards: "8",
        email: "dang.f@nckh.vn",
        website: "https://drdangf.com"
    }
};

// ============================================
// MODAL FUNCTIONS
// ============================================

const modal = document.getElementById('memberModal');
const modalClose = document.querySelector('.modal-close');
const viewMoreBtns = document.querySelectorAll('.btn-view-more');

function openModal(memberId) {
    const member = memberData[memberId];
    
    // Populate modal with member data
    document.getElementById('modalName').textContent = member.name;
    document.getElementById('modalPosition').textContent = member.position;
    document.getElementById('modalDescription').textContent = member.description;
    document.getElementById('modalEmail').textContent = member.email;
    document.getElementById('modalWebsite').innerHTML = 
        `<a href="${member.website}" target="_blank" rel="noopener noreferrer">${member.website.replace('https://', '')}</a>`;
    
    // Update stats
    document.getElementById('modalPapers').textContent = member.papers + '+';
    document.getElementById('modalProjects').textContent = member.projects + '+';
    document.getElementById('modalAwards').textContent = member.awards + '+';
    
    // Skills with animation
    const skillsContainer = document.getElementById('modalSkills');
    skillsContainer.innerHTML = member.skills.map((skill, index) => 
        `<span class="skill-tag" style="animation-delay: ${index * 0.05}s">${skill}</span>`
    ).join('');
    
    // Achievements with animation
    const achievementsContainer = document.getElementById('modalAchievements');
    achievementsContainer.innerHTML = member.achievements.map((achievement, index) => 
        `<li style="animation-delay: ${index * 0.06}s"><span class="achievement-check">✓</span>${achievement}</li>`
    ).join('');
    
    // Show modal with animation
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Trigger animation
    document.querySelector('.modal-content').style.animation = 'slideInScale 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for modal
viewMoreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const memberId = e.target.closest('.team-card').dataset.member;
        openModal(memberId);
    });
});

modalClose?.addEventListener('click', closeModal);

// Close modal when clicking overlay
modal?.addEventListener('click', (e) => {
    if (e.target === modal || e.target === modal.querySelector('.modal-overlay')) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
        closeModal();
    }
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================
// ============================================
// MOBILE MENU TOGGLE
// ============================================

// ============================================
// MOBILE MENU TOGGLE - FIX VERSION
// ============================================

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle menu on hamburger click
hamburger?.addEventListener('click', function(e) {
    e.stopPropagation();
    navLinks.classList.toggle('active');
    this.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ...existing code...
// ...existing code...

// ============================================
// SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// CONTACT FORM
// ============================================

const contactForm = document.querySelector('.contact-form');

contactForm?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputs = this.querySelectorAll('input, textarea');
    const formData = {
        name: inputs[0].value.trim(),
        email: inputs[1].value.trim(),
        subject: inputs[2].value.trim(),
        message: inputs[3].value.trim()
    };
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
        showNotification('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showNotification('Email không hợp lệ! Vui lòng kiểm tra lại.', 'error');
        return;
    }
    
    // Show success message
    console.log('Form submitted:', formData);
    showNotification('Cảm ơn! Tin nhắn đã được gửi thành công. Chúng tôi sẽ liên hệ sớm!', 'success');
    
    // Reset form
    this.reset();
});

// Notification helper function
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
}

// ============================================
// COUNTER ANIMATION
// ============================================

function countUp(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 50);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 50);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const target = parseInt(statNumber.dataset.target);
            countUp(statNumber, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(stat => {
    statsObserver.observe(stat);
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.team-card, .research-card, .project-card, .info-item, .about-text').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============================================
// ACTIVE NAVIGATION LINK
// ============================================

window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href').slice(1);
        if (href === current) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = 'var(--text-dark)';
        }
    });
});

// ============================================
// PARALLAX EFFECT FOR HERO SHAPES
// ============================================

window.addEventListener('scroll', function() {
    const shapes = document.querySelectorAll('.floating-shape');
    const scrollPosition = window.pageYOffset;
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 * (index + 1);
        shape.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});

// ============================================
// TEAM CARD HOVER EFFECTS
// ============================================

document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// ============================================
// PAGE LOAD EFFECTS
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Trigger animations for visible elements
    observer.observe(document.querySelector('.hero-content'));
});

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log(
    '%cNCKH - Nhóm Nghiên Cứu Khoa Học',
    'font-size: 24px; font-weight: bold; color: #667eea; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);'
);
console.log(
    '%cChào mừng bạn!',
    'font-size: 16px; color: #764ba2; font-weight: bold;'
);
console.log(
    '%cĐược xây dựng với ❤️ bởi nhóm phát triển NCKH',
    'font-size: 14px; color: #f093fb;'
);
console.log(
    '%cWebsite: https://nckh.vn | Email: contact@nckh.vn',
    'font-size: 12px; color: #667eea;'
);