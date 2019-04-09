def read_gem_data(filepath):
	times = []
	steps = []
	with open(filepath, 'r') as f:
		content = f.readlines()

	for line in content:
		line = line.strip()
		line = line.split('\t')

		time = float(line[0])

		times.append(time)

		if line[1] == '0':
			steps.append('left')
		elif line[1] == '1':
			steps.append('down')
		elif line[1] == '2':
			steps.append('right')
		elif line[1] == '4':
			steps.append('up')

	return times, steps

if __name__ == '__main__':
	times, steps = read_gem_data('gems.txt')
	print(times)
	print(steps)



