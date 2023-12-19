class Solution:
    def imageSmoother(self, img: List[List[int]]) -> List[List[int]]:
        # Save the dimensions of the image.
        rows_length = len(img)
        columns_length = len(img[0])

        # Iterate over the cells of the image.
        # img[i][j] is the current cell 
        for i in range(rows_length):
            for j in range(columns_length):
                # Initialize the sum and count 
                sum = 0
                count = 0

                # Iterate over all plausible nine indices.
                for row_index in (i - 1, i, i + 1):
                    for column_index in (j - 1, j, j + 1):
                        # If the indices form valid neighbor
                        if 0 <= row_index < rows_length and 0 <= column_index < columns_length:
                            # Extract the original value of img[x][y].
                            sum += img[row_index][column_index] % 256
                            count += 1
                
                # Encode the smoothed value in img[i][j].
                img[i][j] += (sum // count) * 256
        
        # Extract the smoothed value from encoded img[i][j].
        for i in range(rows_length):
            for j in range(columns_length):
                img[i][j] //= 256
            
        # Return the smooth image.
        return img