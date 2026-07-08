from PIL import Image

input_path = "/Users/harshitsingh/Documents/padhai-cbse/public/logo.png"
output_path = "/Users/harshitsingh/Documents/padhai-cbse/public/logo_nobg.png"

img = Image.open(input_path).convert("RGBA")
width, height = img.size
pixels = img.load()

# Flood fill starting from all 4 corners
queue = [(0, 0), (width - 1, 0), (0, height - 1), (width - 1, height - 1)]
visited = set(queue)

tolerance = 15

def is_near_white(color):
    r, g, b, *rest = color
    return (255 - r) < tolerance and (255 - g) < tolerance and (255 - b) < tolerance

transparent_count = 0

while queue:
    x, y = queue.pop(0)
    color = pixels[x, y]
    
    if is_near_white(color):
        pixels[x, y] = (color[0], color[1], color[2], 0)
        transparent_count += 1
        
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                visited.add((nx, ny))
                queue.append((nx, ny))

img.save(output_path, "PNG")
print(f"Done! Made {transparent_count} pixels transparent.")
