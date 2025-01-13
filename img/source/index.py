import os
from PIL import Image

def convert_png_to_webp():
    input_folder = os.getcwd()
    output_folder = os.path.join(input_folder, 'wepb')

    # Создаем выходную папку, если она не существует
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Перебираем все файлы в текущей папке
    for file_name in os.listdir(input_folder):
        if file_name.lower().endswith('.png'):
            # Полный путь к входному файлу
            input_path = os.path.join(input_folder, file_name)

            # Имя выходного файла с заменой расширения на .webp
            output_file_name = os.path.splitext(file_name)[0] + '.webp'
            output_path = os.path.join(output_folder, output_file_name)

            # Открываем PNG и конвертируем в WebP
            with Image.open(input_path) as img:
                img = img.convert("RGBA")  # Обеспечение альфа-канала
                img.save(output_path, "webp")

            print(f"Конвертировано: {input_path} -> {output_path}")

if __name__ == "__main__":
    convert_png_to_webp()