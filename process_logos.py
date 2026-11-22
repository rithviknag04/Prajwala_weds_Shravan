import os
from PIL import Image

def process_logo(input_path, output_path, target_color=(247, 230, 189), pad=12):
    """
    Takes a black-on-white logo, turns white/light into transparent,
    and dark text/graphics into target_color with smooth antialiasing,
    and crops tightly to the artwork bounding box with padding.
    """
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    new_data = []

    for item in data:
        r, g, b, a = item
        # Grayscale luminance
        luma = int(0.299 * r + 0.587 * g + 0.114 * b)
        inv = 255 - luma
        
        # Smooth thresholding
        if inv < 25:
            new_data.append((0, 0, 0, 0))
        elif inv > 175:
            new_data.append((target_color[0], target_color[1], target_color[2], 255))
        else:
            alpha = int(((inv - 25) / (175 - 25)) * 255)
            new_data.append((target_color[0], target_color[1], target_color[2], alpha))

    img.putdata(new_data)
    
    # Crop to bounding box of non-zero alpha
    bbox = img.split()[3].getbbox()
    if bbox:
        w, h = img.size
        left = max(0, bbox[0] - pad)
        upper = max(0, bbox[1] - pad)
        right = min(w, bbox[2] + pad)
        lower = min(h, bbox[3] + pad)
        img = img.crop((left, upper, right, lower))
        
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, "PNG")
    print(f"Saved: {output_path} (size: {img.size})")

if __name__ == "__main__":
    advika_in = r"e:\wedding_invitation\public\logos\advika-logo.png"
    advika_out_pub = r"e:\wedding_invitation\public\logos\advika-logo-transparent.png"
    advika_out_src = r"e:\wedding_invitation\src\assets\logos\advika-logo-transparent.png"
    
    nag_in = r"e:\wedding_invitation\public\logos\nag-digital-logo.jpg"
    nag_out_pub = r"e:\wedding_invitation\public\logos\nag-digital-logo-transparent.png"
    nag_out_src = r"e:\wedding_invitation\src\assets\logos\nag-digital-logo-transparent.png"
    
    # Process with warm ivory / cream
    process_logo(advika_in, advika_out_pub, target_color=(247, 230, 189), pad=8)
    process_logo(advika_in, advika_out_src, target_color=(247, 230, 189), pad=8)
    
    process_logo(nag_in, nag_out_pub, target_color=(247, 230, 189), pad=8)
    process_logo(nag_in, nag_out_src, target_color=(247, 230, 189), pad=8)
    print("Done regenerating transparent cropped logos!")
