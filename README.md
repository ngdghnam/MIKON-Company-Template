# MIKON COMPANY TEMPLATE

### Cấu trúc dự án

#### `public/`:

* **Mục đích**: Chứa các tài nguyên tĩnh (static assets) được phục vụ trực tiếp bởi web server mà không cần qua quá trình xử lý (như Vite/Webpack). Các file trong này sẽ được copy nguyên vẹn vào thư mục build cuối cùng.
* **Ví dụ**: Hình ảnh (`.png`, `.jpg`), fonts (`.woff2`), file 3D (`.glb`), file âm thanh (`.mp3`), `favicon.ico`, ...
* **Cách sử dụng:** Đặt các file bạn muốn truy cập trực tiếp qua URL gốc (ví dụ: `/nice_handpointing.glb`) mà không cần `import` trong code JavaScript/React.

#### `src/`:

* **Mục đích**: **Thư mục cốt lõi** chứa toàn bộ mã nguồn của ứng dụng *Next* mà bạn sẽ viết và chỉnh sửa. Mọi thứ trong này sẽ được xử lý, biên dịch và đóng gói bởi next config.

* **Các thư mục quan trọng bên trong `src/`:**
    * **app/**: 
        * **Các đường dẫn**:
            * **Mục đích**: Nextjs hỗ trợ router mà không cần phải cài đặt quá như React. Để tạo 1 folder chứa các page khác bạn cần 1 cặp ngoặc tròn `()` bọc trong tên folder, ví dụ: `(auth)`.
            * **Cách sử dụng**: Tương tự, chúng ta sẽ tạo ra các folder khác để phục vụ cho nhiều đường dẫn khác nhau tùy vào mục đích sử dụng của chúng ta.
        * `page.tsx`: File nguồn chứa toàn bộ code mà chúng ta sẽ render lên FE
        * `layout.tsx`: Layout chung cho toàn bộ project
        * `global.css`: Code CSS chung được định nghĩa để áp dụng lên mọi file
    * **components/**
        *  **Mục đích**: là nơi chứa các thành phần mà chúng ta sẽ sử dụng để dựng lên cả cấu trúc dự án. Các thành phần này (Component) có thể được tái sử dụng nhiều lần. 
        *  **Các thành phần trong components/**:
            * **Layout/**: Thư mục chứa layout của admin và client.
            * **Admin/**: Components được sử dụng cho Admin Layout 
            * **Client/**: Components được sử dụng cho Client Layout
            * **ui/**: Các component được tự động tạo sẵn khi tải từ shadcnUI. Bạn cũng có thể tự config cho các components này.
    * **db/**
        * **Mục đích**: Next là 1 fullstack framework vì thế, next có thể kết nối trực tiếp tới database mà không cần phải thông qua 1 hệ thống Back-end. Folder này sẽ chứa những file làm việc với database.
        * **Cách sử dụng**: Bạn có thể tạo 1 file `connection.ts` và tạo kết nối tới database.
    * **hooks**
        * **Mục đích**: Chứa các custom React hooks mà chúng ta sẽ sử dụng lên cả hệ thống FE của chúng ta 
        * **Cách sử dụng**: Bạn tạo 1 custom hook và lưu trong folder này.
        * **Ví dụ**: `use-mobile.ts` là 1 hook để chỉnh responsive cho website next của bạn nhằm phù hợp với nhiều thiết bị khác nhau.
    * **i18n/** 
        * **Mục đích**: Thư mục này sẽ chứa những file ngôn ngữ mà next sẽ render để hiển thị trên UI tùy vào ngôn ngữ mà user muốn sử dụng. Tên file phải được đặt chuẩn theo language code (Tham khảo bên dưới)
        * **Cách sử dụng**: Bạn sẽ tạo 1 file ngôn ngữ bất kỳ, file đấy chứa các nội dung ngôn ngữ mà bạn muốn hiển thị trên màn hình. Tuy nhiên, bạn phải thống nhất 1 khuôn mẫu khi đặt nội dung trong các file, không được sắp xếp lung tung nếu ko, next sẽ ko thể render ngôn ngữ ra cho bạn mà thay vào đó sẽ báo lỗi.
        * **Ví dụ**: `fr.json` là tiếng Pháp, `vi.json` là tiếng Việt Nam, `en.json` là tiếng Anh, ...
    * **lib**
        * **Mục đích**: Có những hàm sẽ được sử dụng liên tục trong suốt quá trình làm việc với dự án. Những hàm đó sẽ được lưu trong thư mục này để có thể dễ dàng lấy ra sử dụng 
        * **Ví dụ**: Hàm `hash_password` được sử dụng để mã hóa mật khẩu
    * **server-actions**
        * **Mục đích**: 
    * **services** 
        * **Mục đích** 
        * **Cách sử dụng**
        * **Ví dụ**

#### `components.json` 
* **Mục đích**: File này sẽ được tự động tạo ra khi bạn cài đặt ShadcnUI, trong file này sẽ chứa các cấu hình mà bạn chọn cho ShadcnUi để phù hợp với phong cách thiết kế giao diện của bạn.

#### `next.config.ts`
* **Mục đích**: Cấu hình cho toàn bộ project next sẽ được nằm trong file này. 
* **Ví dụ**: cấu hình i18n được sử dụng.

#### Cài đặt ShadcnUI với yarn [Tham khảo]
* **Mục đích**:
* **Hướng dẫn cài đặt**:

    Hiện nay, trên trang chủ của ShadcnUI, để cài đặt với yarn thì sẽ gõ lệnh `yarn shadcn@latest init`. Tuy nhiên, khi gõ lệnh này, sẽ có 1 số máy bị lỗi và báo ko thể nhận diện.

    Trong trường hợp đó, chúng ta sẽ cài bằng câu lệnh: `yarn add shadcn@latest`. 

    Tương tự khi thêm 1 component mới, thay vì cài giống trên trang chủ ShadcnUI: `yarn shadcn@latest add button` thì chúng ta sẽ thay thế bằng câu lệnh: `yarn shadcn add button` 

### Tham khảo - Preferences
1. [Trang chủ của Nextjs](https://nextjs.org/docs/app/getting-started/project-structure)
2. [wisp](https://www.wisp.blog/blog/the-ultimate-guide-to-organizing-your-nextjs-15-project-structure)
3. [Dashboard của ShadcnUI](https://ui.shadcn.com/examples/dashboard)
4. [Folder Structure Layout](https://youtu.be/gLFT1wYd7G0?si=WttGsLZkJ8T_J978)
5. [Folder Structure Layout 2](https://youtu.be/xyxrB2Aa7KE?si=pSpSRkGvwcVFiBKl)

### Setup tên file chuẩn đa ngôn ngữ

Tham khảo [Country langs codes](https://www.fincher.org/Utilities/CountryLanguageList.shtml)
