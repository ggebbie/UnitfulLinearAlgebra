var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = UnitfulLinearAlgebra","category":"page"},{"location":"#UnitfulLinearAlgebra","page":"Home","title":"UnitfulLinearAlgebra","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for UnitfulLinearAlgebra.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [UnitfulLinearAlgebra]","category":"page"},{"location":"#Base.Matrix-Tuple{T} where T<:UnitfulLinearAlgebra.MultipliableMatrices","page":"Home","title":"Base.Matrix","text":"function Matrix(A::MultipliableMatrix)\n\nExpand A into array form\nUseful for tests, display\npp. 193, Hart\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.EndomorphicMatrix","page":"Home","title":"UnitfulLinearAlgebra.EndomorphicMatrix","text":"struct EndomorphicMatrix\n\nAn endomorphic matrix maps a dimensioned vector space\nto itself. The dimensional range and domain are the same.\n\nAttributes\n\nnumbers: numerical (dimensionless) matrix\nrange: dimensional range in terms of units, this is also the domain\n\n\n\n\n\n","category":"type"},{"location":"#UnitfulLinearAlgebra.EndomorphicMatrix-Tuple{Any, Any}","page":"Home","title":"UnitfulLinearAlgebra.EndomorphicMatrix","text":"function EndomorphicMatrix\n\nConstructor where `exact` is a keyword argument. One may construct an EndomorphicMatrix without specifying exact, in which case it defaults to `false`.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.EndomorphicMatrix-Tuple{Matrix}","page":"Home","title":"UnitfulLinearAlgebra.EndomorphicMatrix","text":" EndomorphicMatrix(A)\n\nTransform array to EndomorphicMatrix type\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.EndomorphicMatrix-Tuple{T} where T<:Number","page":"Home","title":"UnitfulLinearAlgebra.EndomorphicMatrix","text":"function EndomorphicMatrix(A::T) where T <: Number\n\nSpecial case of a scalar. Must be dimensionless.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.MultipliableMatrix","page":"Home","title":"UnitfulLinearAlgebra.MultipliableMatrix","text":"struct MultipliableMatrix\n\nMatrices with units that a physically reasonable,\ni.e., more than just an array of values with units.\n\nMultipliable matrices have dimensions that are consistent with many linear algebraic manipulations, including multiplication.\n\nHart suggests that these matrices simply be called \"matrices\", and that matrices with dimensional values that cannot be multiplied should be called \"arrays.\"\n\nAttributes\n\nnumbers: numerical (dimensionless) matrix\nrange: dimensional range in terms of units\ndomain: dimensional domain in terms of units\nexact: geometric (true) or algebraic (false) interpretation\n\n\n\n\n\n","category":"type"},{"location":"#UnitfulLinearAlgebra.MultipliableMatrix-Tuple{Any, Any, Any}","page":"Home","title":"UnitfulLinearAlgebra.MultipliableMatrix","text":"MultipliableMatrix(numbers,range,domain;exact=false)\n\nConstructor where `exact` is a keyword argument. One may construct a MultipliableMatrix without specifying exact, in which case it defaults to `false`.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.MultipliableMatrix-Tuple{Matrix}","page":"Home","title":"UnitfulLinearAlgebra.MultipliableMatrix","text":" MultipliableMatrix(array)\n\nTransform array to MultipliableMatrix\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.SquarableMatrix","page":"Home","title":"UnitfulLinearAlgebra.SquarableMatrix","text":"struct SquarableMatrix\n\nAn squarable matrix is one where 𝐀² is defined.\nIt is the case if the dimensional range and domain are parallel.\n\nAttributes\n\nnumbers: numerical (dimensionless) matrix\nrange: dimensional range in terms of units, this is also the domain\ndomainshift: shift to range that gives the domain\n\n\n\n\n\n","category":"type"},{"location":"#Base.:*-Union{Tuple{T1}, Tuple{T2}, Tuple{T1, T2}} where {T2<:Number, T1<:UnitfulLinearAlgebra.MultipliableMatrices}","page":"Home","title":"Base.:*","text":"function *(A::MultipliableMatrix,b)\n\nMatrix-scalar multiplication with units/dimensions.\nMust account for change in the range when the\n scalar has units.\nHere, take product of dimension of the scalar and the range.\nAlternatively, divide the domain by the dimension of the scalar. \nMatrix-scalar multiplication is commutative.\nResult is `exact` if input matrix is exact and scalar is dimensionless. \nNote: special matrix forms revert to a product that is a MultipliableMatrix.\n\n\n\n\n\n","category":"method"},{"location":"#Base.:*-Union{Tuple{T1}, Tuple{T2}, Tuple{T1, T2}} where {T2<:UnitfulLinearAlgebra.MultipliableMatrices, T1<:UnitfulLinearAlgebra.MultipliableMatrices}","page":"Home","title":"Base.:*","text":"function *(A,B)\n\nMatrix-matrix multiplication with units/dimensions.\nA*B represents two successive transformations.\nRange of B should equal domain of A in geometric interpretation.\nRange of B should be parallel to domain of A in algebraic interpretation.\n\nNote: special matrix forms revert to a product that is a MultipliableMatrix.\n\n\n\n\n\n","category":"method"},{"location":"#Base.:*-Union{Tuple{T}, Tuple{T, Vector}} where T<:UnitfulLinearAlgebra.MultipliableMatrices","page":"Home","title":"Base.:*","text":"function *(A::MultipliableMatrix,b)\n\nMatrix-vector multiplication with units/dimensions.\nUnitful also handles this case, but here there is added\nefficiency in the storage of units/dimensions by accounting\nfor the necessary structure of the matrix.\n\n\n\n\n\n","category":"method"},{"location":"#Base.inv-Tuple{T} where T<:UnitfulLinearAlgebra.MultipliableMatrices","page":"Home","title":"Base.inv","text":" function inv\n\n\n\n\n\n","category":"method"},{"location":"#Base.similar-Tuple{Any, Any}","page":"Home","title":"Base.similar","text":"function similar(a,b)::Bool\n\nDimensional similarity of vectors, a binary relation\nRead \"a has the same dimensional form as b\"\n`a` and `b` may still have different units.\nA stronger condition than being parallel.\npp. 184, Hart\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.det-Tuple{T} where T<:UnitfulLinearAlgebra.MultipliableMatrices","page":"Home","title":"LinearAlgebra.det","text":"function det\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.lu-Tuple{T} where T<:UnitfulLinearAlgebra.MultipliableMatrices","page":"Home","title":"LinearAlgebra.lu","text":"function lu(A::MultipliableMatrix{Float64})\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.convert_domain-Tuple{MultipliableMatrix, Vector}","page":"Home","title":"UnitfulLinearAlgebra.convert_domain","text":"function convert_domain(A, newdomain)\n\nWhen using the geometric interpretation of matrices,\nit is useful to convert the dimensional domain of the\nmatrix to match the expected vectors during multiplication.\nHere we set the matrix to `exact=true` after this step.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.convert_range-Tuple{MultipliableMatrix, Vector}","page":"Home","title":"UnitfulLinearAlgebra.convert_range","text":"function convert_range(A, newrange)\n\nWhen using the geometric interpretation of matrices,\nit is useful to convert the dimensional range of the\nmatrix to match the desired output of multiplication.\nHere we set the matrix to `exact=true` after this step.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.dimensionless-Tuple{MultipliableMatrix}","page":"Home","title":"UnitfulLinearAlgebra.dimensionless","text":" function dimensionless(A)\n\n Not all dimensionless matrices have\n dimensionless domain and range.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.domainlength-Tuple{T} where T<:UnitfulLinearAlgebra.MultipliableMatrices","page":"Home","title":"UnitfulLinearAlgebra.domainlength","text":"function domainlength(A::MultipliableMatrix)\n\nNumerical dimension (length or size) of domain of A\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.dottable-Tuple{Any, Any}","page":"Home","title":"UnitfulLinearAlgebra.dottable","text":"function dottable(a,b)\n\nAre two quantities dimensionally compatible\nto take a dot product?\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.element-Union{Tuple{T}, Tuple{T, Integer, Integer}} where T<:UnitfulLinearAlgebra.MultipliableMatrices","page":"Home","title":"UnitfulLinearAlgebra.element","text":"function element(A::MultipliableMatrix,i::Integer,j::Integer)\n\nRecover element (i,j) of a MultipliableMatrix.\n\n#Input\n\nA::MultipliableMatrix\ni::Integer: row index\nj::Integer: column index\n\n#Output\n\nQuantity: numerical value and units\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.endomorphic-Tuple{Matrix}","page":"Home","title":"UnitfulLinearAlgebra.endomorphic","text":"function endomorphic(A)::Bool\n\nIs an array endomorphic?\nIt requires a particular structure of the units/dimensions in the array.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.exact-Tuple{T} where T<:UnitfulLinearAlgebra.MultipliableMatrices","page":"Home","title":"UnitfulLinearAlgebra.exact","text":"function exact(A)\n\nexact=true: geometric interpretation of domain and range\nexact=false: algebraic interpretation\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.invdimension-Tuple{Any}","page":"Home","title":"UnitfulLinearAlgebra.invdimension","text":"function invdimension\n\nDimensional inverse\n  \npp. 64, Hart, `a~` in his notation\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.left_uniform-Tuple{T} where T<:UnitfulLinearAlgebra.MultipliableMatrices","page":"Home","title":"UnitfulLinearAlgebra.left_uniform","text":"function left_uniform(A)\n\nDoes the range of A have uniform dimensions?\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.multipliable-Tuple{Matrix}","page":"Home","title":"UnitfulLinearAlgebra.multipliable","text":"function multipliable(A)::Bool\n\nIs an array multipliable?\nIt requires a particular structure of the units/dimensions in the array.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.parallel-Tuple{Any, Any}","page":"Home","title":"UnitfulLinearAlgebra.parallel","text":"function parallel\n\nVector a is dimensionally parallel to vector b if\nthey have the same length and a consistent dimensional\nchange relates corresponding components.\nGuaranteed if two vectors are dimensionally similar.\nTrue for scalars in all cases. \n\npp. 188, Hart\nNote: Hart uses ≈, but this conflicts with an existing Julia function.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.rangelength-Tuple{T} where T<:UnitfulLinearAlgebra.MultipliableMatrices","page":"Home","title":"UnitfulLinearAlgebra.rangelength","text":"function rangelength(A::MultipliableMatrix)\n\nNumerical dimension (length or size) of range\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.right_uniform-Tuple{T} where T<:UnitfulLinearAlgebra.MultipliableMatrices","page":"Home","title":"UnitfulLinearAlgebra.right_uniform","text":"function right_uniform(A)\n\nDoes the domain of A have uniform dimensions?\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.uniform-Tuple{T} where T<:Number","page":"Home","title":"UnitfulLinearAlgebra.uniform","text":"function uniform(a)\n\nIs the dimension of this quantity uniform?\n\nThere must be a way to inspect the Unitful type to answer this.\n\n\n\n\n\n","category":"method"}]
}