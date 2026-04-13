const avatar = document.getElementById('avatar');
const avatarUpload = document.getElementById('avatar-upload');
const nameDisplay = document.getElementById('name-display');
const nameInput = document.getElementById('name-input');
const bioDisplay = document.getElementById('bio-display');
const bioInput = document.getElementById('bio-input');
const saveBtn = document.getElementById('save-btn');
const themeToggle = document.getElementById('theme-toggle');

// 初始化隐藏输入框
nameInput.style.display = 'none';
bioInput.style.display = 'none';

// 点击姓名编辑
nameDisplay.addEventListener('click', () => {
    nameDisplay.style.display = 'none';
    nameInput.style.display = 'block';
    nameInput.value = nameDisplay.textContent === '请输入姓名' ? '' : nameDisplay.textContent;
    nameInput.focus();
});

// 点击简介编辑
bioDisplay.addEventListener('click', () => {
    bioDisplay.style.display = 'none';
    bioInput.style.display = 'block';
    bioInput.value = bioDisplay.textContent === '请输入个人简介' ? '' : bioDisplay.textContent;
    bioInput.focus();
});

// 头像上传
avatarUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (ev) => {
            avatar.src = ev.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// 保存
saveBtn.addEventListener('click', () => {
    if (nameInput.value.trim()) {
        nameDisplay.textContent = nameInput.value.trim();
    }
    if (bioInput.value.trim()) {
        bioDisplay.textContent = bioInput.value.trim();
    }

    nameInput.style.display = 'none';
    nameDisplay.style.display = 'block';
    bioInput.style.display = 'none';
    bioDisplay.style.display = 'block';

    alert('保存成功');
});

// 主题切换
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

